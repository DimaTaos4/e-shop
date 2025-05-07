/** @jsxImportSource @emotion/react */
import { useForm } from "react-hook-form";
import { fields } from "./fields";
import Button from "../../../shared/components/Button/Button";
import { formStyle, emailNameStyle, inputStyle, lastInputStyle, btnSubmit, errorStyle } from "./styles";
const ContactsForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (values) => {
        console.log(values);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} css={formStyle}>
            <div css={emailNameStyle}>
                <div >
                    <input css={inputStyle}
                        {...register(fields.email.name, fields.email.rules)}
                        type={fields.email.type}
                        placeholder={fields.email.placeholder}
                    />
                    {errors[fields.email.name] && (
                        <p css={errorStyle}>{errors[fields.email.name].message}</p>
                    )}
                </div>

                <div >
                    <input css={inputStyle}
                        {...register(fields.name.name, fields.name.rules)}
                        type={fields.name.type}
                        placeholder={fields.name.placeholder}
                    />
                    {errors[fields.name.name] && (
                        <p css={errorStyle}>{errors[fields.name.name].message}</p>
                    )}
                </div>
            </div>


            <div >
                <input css={lastInputStyle}
                    {...register(fields.message.name, fields.message.rules)}
                    type={fields.message.type}
                    placeholder={fields.message.placeholder}
                />
                {errors[fields.message.name] && (
                    <p css={errorStyle}>{errors[fields.message.name].message}</p>
                )}
            </div>

            <Button css={btnSubmit}>Отправить</Button>
        </form>
    );
};

export default ContactsForm;
