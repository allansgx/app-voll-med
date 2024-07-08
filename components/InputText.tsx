import { FormControl, IInputProps, Input } from "native-base";

interface InputTextProps extends IInputProps {
    label?: string,
    placeholder: string
}

export function InputText({ label, placeholder, ...rest }: InputTextProps) {
    return (
        <FormControl mt={3}>
            {
                label && (
                    <FormControl.Label>
                        {label}
                    </FormControl.Label>
                )
            }

            <Input
                placeholder={placeholder}
                size='lg'
                w='100%'
                borderRadius='lg'
                bgColor='gray.100'
                shadow={3}
                {...rest}
            />
        </FormControl>
    )
}