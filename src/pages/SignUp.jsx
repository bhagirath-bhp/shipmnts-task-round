import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/user";
import { ToastContainer, toast } from "react-toastify";


const SignUp = () => {
    const [password, setPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [showPasswordWarning, setShowPasswordWarning] = useState(false);
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setShowPasswordWarning(e.target.value.length < 6);
    };
    const handleSignUp = async (event) => {
        event.preventDefault();
        console.log(event.target)
        // const response = await signup(event.target[0].value, event.target[1].value, event.target[4].value, event.target[5].value, event.target[3].value);
        const response = await signup(event.target[0].value, event.target[1].value, event.target[2].value, phoneNo, password);
        if (response.success) {
            toast.success(response.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            setTimeout(() => {
                navigate("/")
            }, 2000);
        }
        else {
            toast.error(response.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }
    return (
        <Card color="transparent" shadow={false} className="flex justify-center items-center h-screen">
            <Typography variant="h4" color="blue-gray">
                Sign Up
            </Typography>
            <form className="mt-8 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSignUp}>
                <div className="mb-1 flex flex-col gap-4">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Full Name
                    </Typography>
                    <Input
                        size="md"
                        placeholder="cool name"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                    </Typography>
                    <Input
                        size="md"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Mobile
                    </Typography>
                    <Input
                        size="md"
                        placeholder="+91 123456789"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                    </Typography>
                    <Input
                        type="password"
                        size="md"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <Checkbox
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            I agree the
                            <a
                                href="#"
                                className="font-medium transition-colors hover:text-gray-900"
                            >
                                &nbsp;Terms and Conditions
                            </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth type="submit">
                    sign up
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a href="#" className="font-medium text-gray-900">
                        Sign In
                    </a>
                </Typography>
            </form>
        </Card>
    );
}
export default SignUp;