import Image from "../../compenents/Design/Image";
import {useQuery} from "@apollo/client";
import GET_MEDIUMS from "../../lib/Queries/getMediums";

const Profile = () => {
    const getMedium = useQuery(GET_MEDIUMS);
    const { data, loading, error } = getMedium;

    if (loading) return 'Loading...';
    console.log(data);
    const { users } = data;
    return (
        <>
            <div className="content-wrapper">
                {/*greetings users*/}
                <div className="row">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card corona-gradient-card">
                            <div className="card-body py-0 px-0 px-sm-3">
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-7 col-xl-8 ml-4 p-2">
                                        <p className="mb-1 mb-sm-0">Welcome </p>
                                        <p className="mb-1 mb-sm-0">These are the Registered mediums</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Assigment page*/}
                <div className="row">
                    {users.map((entry) => (
                        <div key={entry.id} className="col-xl-3 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <Image src={entry.photo ? entry.photo.url : "https://via.placeholder.com/1600x900" } alt="..." className="img-fluid img-thumbnail" />
                                        <div className="col-12 mb-4">
                                            <div className=" row d-flex align-items-center align-self-start">
                                                <div className="col-6">
                                                    <span>username:</span><h3 className="mb-0">{entry.username}</h3>
                                                </div>
                                                <div className="col-6">
                                                    <span>firstname:</span><h3 className="mb-0">{entry.firstName}</h3>
                                                </div>
                                                <div className="col-6">
                                                    <span>lastname:</span><h3 className="mb-0">{entry.lastName}</h3>
                                                </div>
                                                <div className="col-6">
                                                    <span>email:</span><h3 className="mb-0">{entry.email}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-9 mt-3">
                                            <p className="text-muted font-weight-normal">{}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

Profile.requiresAuth = true;
export default Profile;
