import { Formik, Form, Field, FormikProps } from "formik"
import axios from "axios"
import * as yup from 'yup'
import Header from "../../component/Header"
import { useState } from "react"

const RegistrationScheme = yup.object().shape({
    name: yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!'),
    email: yup.string()
        .email('Invalid email')
        .required("Email is required"),
    password: yup.string()
        .min(6,"Password should be at least 6 characters")
        .required("Password is required"),
})

interface myFormValues {
    name: string,
    email: string,
    password: string
}

const Registration: React.FC = () =>{

    const [inputValues, setInputValues] = useState<myFormValues>()
    const [show, setShow] = useState(false)

    const showpass = () =>{
        setShow(prevState => !prevState)
    }

    const postData = async ({name, email, password}:myFormValues) => {
        try{
            const {data} = await axios.post("http://localhost:3000/user", {
                name, 
                email, 
                password
            })

            setInputValues(data)
        } catch(error){
            console.log(error)
        }
    }

    const initialValues: myFormValues = {name: "", email: "", password: ""}

    if(!postData) return <div>No data</div>

    return (
        <div className="w-full">
            <Header />
            <div className="flex justify-center items-center py-10">
                
                <Formik
                initialValues={initialValues}
                validationSchema={RegistrationScheme}
                onSubmit={values =>{
                    console.log(JSON.stringify(values))
                    postData(values)
                    alert("Data input!")
                }}>
                    {(props: FormikProps<myFormValues>)=>{
                        const {values, errors, touched, handleChange} = props
                        
                        console.log(props)
                        return(

                            <Form className="bg-bitBlue p-10 w-[30%] max-lg:w-[80%] flex flex-col gap-8 items-center">
                                <h1 className="font-bold text-3xl capitalize">page register</h1>
                                <div className="flex flex-col gap-4 w-full">
                                    <label htmlFor="name">Name </label>
                                    <Field 
                                        type="name"
                                        name="name"
                                        onChange={handleChange}
                                        value={values.name}
                                        className="bg-bitInput py-1 px-2"
                                    />
                                    {touched.name && errors.name ? (
                                        <div className="text-red-500 ">{errors.name} </div>
                                    ) : null}
                                </div>
                                <div className="flex flex-col gap-4 w-full">
                                    <label htmlFor="email">Email </label>
                                    <Field 
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={values.email}
                                        className="bg-bitInput py-1 px-2"
                                    />
                                    {touched.email && errors.email ? (
                                        <div className="text-red-500">{errors.email} </div>
                                    ) : null}
                                </div>
                                <div className="flex flex-col gap-4 w-full">
                                    <label htmlFor="password">Password </label>
                                    <div className="bg-bitInput py-1 px-2 text-black flex justify-between gap-2">
                                    <Field 
                                        type={show === false ? "password" : "text"} 
                                        name="password"
                                        onChange={handleChange}
                                        value={values.password}
                                        className="w-full"
                                    />
                                    <button onClick={showpass}>show</button>
                                    </div>
                                    
                                    {touched.password && errors.password ? (
                                        <div className="text-red-500">{errors.password} </div>
                                    ) : null}
                                </div>
                                <button type="submit" className="py-2 px-7 border-2 border-black rounded-xl hover:bg-black hover:text-white">Submit</button>
                            </Form>

                        ) 
                    }}
                </Formik>
            </div>
        </div>
    )
}


export default Registration