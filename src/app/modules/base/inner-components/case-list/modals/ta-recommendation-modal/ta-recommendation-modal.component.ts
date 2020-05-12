import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ta-recommendation-modal',
  templateUrl: './ta-recommendation-modal.component.html',
  styleUrls: ['./ta-recommendation-modal.component.scss']
})
export class TaRecommendationModalComponent implements OnInit {

	@Input() item: any;
	@Input() actionString: any;
	@Input() userDetails: any;

  formData: any = {}

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
		this.formData.primaryKeyId = '';
		this.formData.author = this.userDetails.firstName + this.userDetails.lastName;
		this.formData.caseStage = this.item.stage;
		this.formData.caseStatus = this.item.status;
		this.formData.noteDate = this.item.intakeDate;
		this.formData.noteType = this.actionString;

		let reqData = {
			action: 'ADD',
			caseId: this.item.caseInstanceId,
			case_module: 'caseNotesList',
		};

		let finalData = {
			"paramData": reqData,
			"dataObject": this.formData,
		};
		console.log('finalData: ', finalData);

		this.saveData(finalData);
	}

	saveData(data) {

		// this.requestService.postRequestWithParam(AppConstants.MANAGE_CASE_MODULE_DATA, data)
		// 	.subscribe(
		// 		(result: any) => {
		// 			this.spinner.hide();
		// 			res.success = true;
		// 			this.activeModal.close(res);
		// 		},
		// 		(error: any) => {
		// 			this.spinner.hide();
		// 			res.success = false;
		// 			res.message = 'Unable to save Attachment!';
		// 			this.activeModal.close(res);
		// 		}
		// 	);
	}

}
