import { FormControl, IInputProps, Input } from "native-base";

interface InputTextProps extends IInputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    value?: string;
    onChangeText?: (text: string) => void;
}

export function InputText({
    label,
    placeholder,
    secureTextEntry = false,
    value,
    onChangeText
}: InputTextProps) {
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
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </FormControl>
    )
}