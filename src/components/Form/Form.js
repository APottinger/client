import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const {register, handleSubmit, watch, formState: { errors }} = useForm();
    

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
        <h3>Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="textarea" placeholder="your post..." {...register('post', { required: true })}/>
            <input type="text" placeholder="name" {...register('name', { required: true})}/>
            {errors.post && errors.post.errors}
            <input type="submit" />
        </form>

        </>
    )
}

export default Form