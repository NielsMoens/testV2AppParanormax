import {useMutation, useQuery} from "@apollo/client";
import {useRouter} from "next/router";
import MUTATE_CREATE_ASSIGNMENT from "../../lib/mutations/createAssignment";
import Input from "../../compenents/Design/Input";
import {getUser, getUserId} from "../../compenents/core/storage";

const Assignments = () => {
    const router = useRouter();
    const [createNewAssignment] = useMutation(MUTATE_CREATE_ASSIGNMENT);


    // To Do
    // const saveUser = () => {
    //     if (typeof window !== "undefined") {
    //         const user = localStorage.getItem("KEY_USER");
    //         return JSON.parse(user);
    //     }
    //     return null
    // }
    // const getUserId = async () => {
    //     const user = await saveUser();
    //     let userId= user.user.id;
    //
    //     return userId;
    // }
    // const userd = getUserId()
    // console.log(userd)


    const onSubmit = (e) => {
        e.preventDefault()
        createNewAssignment({
            variables: {
                title: e.target.title.value,
                shortDescription: e.target.shortDescription.value,
                date: e.target.date.value,
                id: 1
            }
        })
    }

    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="row w-100 m-0">
                        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                            <div className="card col-lg-4 mx-auto">
                                <div className="card-body px-5 py-5">
                                    <h3 className="card-title text-left mb-3">Create Assignment</h3>
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group">
                                            <label>title</label>
                                            <Input
                                                placeholder="title "
                                                id="title"
                                                className="form-control p_input"
                                                type="text"
                                                name="title"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>short description</label>
                                            <Input
                                                placeholder="short description"
                                                id="shortDescription"
                                                className="form-control p_input"
                                                type="text"
                                                name="shortDescription"
                                            />
                                        </div><div className="form-group">
                                            <label>date </label>
                                            <Input
                                                placeholder="deadline Date"
                                                id="date"
                                                className="form-control p_input"
                                                type="datetime-local"
                                                name="date"
                                            />
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block enter-btn">
                                                Create
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Assignments;
