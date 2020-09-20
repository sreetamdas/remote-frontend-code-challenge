import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledButton } from "styles/components";
import {
	PeopleFormContainer,
	PeopleFormFooter,
	PeopleFormHeader,
} from "styles/PeopleForm";

export type TPeopleFormProps = {
	person?: TPeopleAttributes;
};
export const PeopleForm = ({ person }: TPeopleFormProps) => {
	const [isEditingMode, setIsEditingMode] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (!!person) setIsEditingMode(true);
	}, []);

	const handleSubmit = () => {
		router.push("/");
	};

	return (
		<PeopleFormContainer>
			<PeopleFormHeader>
				{isEditingMode ? "Edit employee" : "Add a new employee"}
			</PeopleFormHeader>
			asd
			<PeopleFormFooter>
				<Link href="/">
					<StyledButton>Cancel</StyledButton>
				</Link>
				<StyledButton primary onClick={handleSubmit}>
					{isEditingMode ? "Save" : "Add  employee"}
				</StyledButton>
			</PeopleFormFooter>
		</PeopleFormContainer>
	);
};
