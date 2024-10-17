import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form.tsx";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import { z } from "zod";

const SignUpCard = () => {
    const formSchema = z.object({
        username: z.string(),
        password: z.string(),
        confirmPassword: z.string(),
        fullname: z.string(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            username: '',
            password: '',
            confirmPassword: '',
            fullname: ''
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Card className="md:w-[480px]">
            <CardHeader className="items-center">
                <CardTitle className="text-2xl">Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField name="username" control={form.control} render={({field}) => (
                        <FormItem>
                        <FormControl>
                        <Input {...field} type="text" placeholder="Enter Username"/>
                </FormControl>
            </FormItem>
            )}>
            </FormField>

            <FormField name="password" control={form.control} render={({field}) => (
                <FormItem>
                    <FormControl>
                        <Input {...field} type="password" placeholder="Enter Password"/>
                    </FormControl>
                </FormItem>
            )}>
            </FormField>

            <FormField name="confirmPassword" control={form.control} render={({field}) => (
                <FormItem>
                    <FormControl>
                        <Input {...field} type="password" placeholder="Re-Enter Password"/>
                    </FormControl>
                </FormItem>
            )}>
            </FormField>

            <FormField name="fullname" control={form.control} render={({field}) => (
                <FormItem>
                    <FormControl>
                        <Input {...field} type="text" placeholder="Enter Fullname"/>
                    </FormControl>
                </FormItem>
            )}>
            </FormField>
            <Button type="submit" size="lg" className="w-full">Sign Up</Button>
        </form>
</Form>
</CardContent>
</Card>
)
}

export default SignUpCard;