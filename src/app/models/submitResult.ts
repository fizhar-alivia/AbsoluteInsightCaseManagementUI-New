export class SubmitResult {
	success: boolean;
	name: string;
	message: string;
	data: any;
	errorMessage: string;
	errors: any;

	public static success() {
		return new SubmitResult();
	}

	public static failure() {
		let sr : SubmitResult = new SubmitResult();
		sr.success = false;
		return sr;
	}
}
