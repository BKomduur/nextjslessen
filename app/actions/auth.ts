import { prisma } from "@/src/lib/prisma";
import { hash } from "bcrypt";

type FormState = {
	error?: string;
}

export async function signup(state: FormState, formData: FormData) {
  // Valideer formuliervelden
	const email = formData.get('email') as string
	const password = formData.get('password') as string
	
	const userExists = await prisma.user.findUnique({
		where: {
			email: email
		}
	})

	if (userExists) {
		throw "Email is al in gebruik"
	}

	const hashedPassword = await hash(password, 10);
	
	await prisma.user.create({
		data: {
			email: email,
			password: hashedPassword,
		}
	});
}