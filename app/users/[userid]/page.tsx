import { use } from "react";

interface UserDetailProp{
    params: Promise<{userid: string}>;
}

const UserDetailPage = async ({params}: UserDetailProp) => {
    const {userid} = await params;
    const res = await fetch(`http://localhost:5000/users/${userid}`);
    const user = await res.json();
    return (
        <div>
            <h2>User Id: {userid}</h2>
            <span>Name: {user.name}</span><br />
            <span>Email: {user.email}</span>
        </div>
    );
};

export default UserDetailPage;