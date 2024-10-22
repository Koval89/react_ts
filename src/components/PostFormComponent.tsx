import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import {newPost} from "../services/form.post.api.service";


type PostProps = {
    id: number,
    title: string,
    body: string
}

const PostFormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            isValid
        }
    } = useForm<PostProps>({mode: 'all', resolver:joiResolver(postValidator)});


    const customHendler = (dataFromForm: PostProps) => {
        newPost(dataFromForm).then(response=> console.log(response))
        console.log(dataFromForm)
    }

    return (
        <form onSubmit={handleSubmit(customHendler)}>
            <div><label>
                <input type='number' placeholder={'id'} {...register('id')}/>

                {errors.id && <div>{errors.id.message}</div>}
            </label>
            </div>
            <div>
                <label>
                    <input type='text' placeholder={'title'} {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
            </div>
            <div>
                <label><input type='text' placeholder={'body'} {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>
            </div>


            <button disabled={!isValid}>save</button>
        </form>
    );
};

export default PostFormComponent;
