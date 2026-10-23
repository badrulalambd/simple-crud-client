"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { useRouter } from "next/navigation";
import UpdateUserDialog from "./UpdateUserDialog";

const UsersCard = ({ user }) => {
    const { _id } = user;

    const router = useRouter();

    const handleDeleteUser = async (id) => {
        console.log("userId: ", _id);
        const res = await fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',

        });

        const afterDelete = await res.json();
        console.log("AfterDelete: ", afterDelete);
        if (afterDelete.deletedCount > 0) {
            console.log("User deleted successfully!!!");
            router.refresh();
        }

    }

    return (
        <div>
            <Card className="relative pt-0">
                <CardHeader>
                    <CardAction>
                    </CardAction>
                    <CardTitle>{user.name}</CardTitle>
                    <CardDescription>
                        Email: {user.email}
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Link href={`/users/${user._id}`}>
                        <Button>View Event</Button>
                    </Link>
                    <UpdateUserDialog user={user}/>
                    <Button onClick={() => handleDeleteUser(_id)} variant="destructive" className="">Delete</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default UsersCard;