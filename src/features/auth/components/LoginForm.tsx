"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"

import LoginService from "../auth.api"
import { Spinner } from "@/components/ui/spinner"

import { useAuthStore } from "../store/auth.store"
import { useNavigate } from "react-router-dom"
import { CheckboxBasic } from "./CheckBoxBasic"




const formSchema = z.object({
    email: z
        .email()
        .min(5, "email be at least 5 characters."),
    password: z
        .string()
        .min(5, "password must be at least 5 characters.")
        .max(32, "password must be at most 32 characters."),
    loginAsAdmin: z
        .boolean()
})

export function LoginForm() {

    const { authLogin } = useAuthStore(s => s)
    const [loginAsAdmin, setLoginAsAdmin] = React.useState(false)

    const navigate = useNavigate()

    const [loading, setloading] = React.useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "john@mail.com",
            password: "changeme",
            loginAsAdmin: false
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {

        if (loading) {
            return
        }

        try {
            setloading(true);

            const result = await LoginService.login(data)

            //store to auth store
            authLogin({ id: "12345", email: data.email },
                result.access_token, result.refresh_token,
                loginAsAdmin
            )

            toast.success("logged in", { position: "top-center" })

            //navigate to home
        } catch (error) {
            toast.error("Issue while loggin in")
        } finally {
            setloading(false)
        }
    }

    return (
        <Card className="w-full h-110 sm:max-w-md">
            <CardHeader>
                <CardTitle className="text-3xl">Login</CardTitle>
                <CardDescription>
                    Welcome back user...!!!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-email">
                                        Enter Email
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter email eg.john@mail.com"
                                        autoComplete="off"
                                        disabled={loading}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="password"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-password">
                                        Enter Password
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter password"
                                        autoComplete="off"
                                        disabled={loading}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <CheckboxBasic checked={loginAsAdmin} setChecked={setLoginAsAdmin} />
                    </FieldGroup>
                </form>
            </CardContent>

            <CardFooter>
                <Field orientation="responsive">
                    <Button type="submit" form="form-rhf-demo">
                        Log-in
                        {loading ? <Spinner data-icon="inline-start" /> : <></>}
                    </Button>
                    {!loading && (<Button className="text-xs" type="button" variant="link" onClick={() => form.reset()}>
                        Forgotten Password
                    </Button>)}
                </Field>
            </CardFooter>
        </Card>
    )
}
