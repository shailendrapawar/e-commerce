import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"


export function CheckboxBasic({ checked, setChecked }: any) {
    return (
        <FieldGroup className="mx-auto w-full">
            <Field orientation="horizontal" className="">
                <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" checked={checked} onCheckedChange={setChecked} />
                <FieldLabel htmlFor="terms-checkbox-basic">
                    Login as Admin
                </FieldLabel>
            </Field>
        </FieldGroup>
    )
}
