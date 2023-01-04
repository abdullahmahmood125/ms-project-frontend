import { Injectable, Injector } from '@angular/core';
import { BaseService } from "../base/base.service";

@Injectable({ providedIn: 'root' })
export class SCService extends BaseService {

  constructor(injector: Injector) {
    super(injector);
  }

  saveScTask(form: any) {
    return this.post('task/postTask', form);
  }

  saveScProposal(form: any) {
    return this.post('proposal/postProposal', form);
  }

  findAllTasks() {
    return this.get('task/taskList');
  }

  findAllProposals() {
    return this.get('proposal/proposalList');
  }
  findAllNewTasks() {
    return this.get('task/newTaskList');
  }

  findTaskByTaskId(id: number) {
    return this.get('task/info/' + id);
  }


  findProposalByTaskId(id: number) {
    return this.get('proposal/info/' + id);
  }

  //others
  saveKycBank(form: any) {
    return this.post('kyc/api/saveKycBank', form);
  }

  saveKycBankBranch(form: any) {
    return this.post('kyc/api/saveKycBankBranch', form);
  }

  saveKycUser(form: any) {
    return this.post('kyc/api/saveKycUser', form);
  }

  saveKycUserAccount(form: any) {
    return this.post('kyc/api/saveKycUserAccount', form);
  }

  getKycBankBranchLabelValue() {
    return this.get('kyc/api/getKycBankBranchLabelValue');
  }

  getKycBankLabelValue() {
    return this.get('kyc/api/getKycBankLabelValue');
  }

  disableKycBankBranchById(id: number) {
    return this.deleteRequest('kyc/api/disableKycBankBranchById/' + id);
  }

  disableKycBankById(id: number) {
    console.log('id for the kyc bank is ' + id);
    return this.deleteRequest('kyc/api/disableKycBankById/' + id);
  }

  disableKycUserAccountById(id: number) {
    return this.deleteRequest('kyc/api/disableKycUserAccountById/' + id);
  }

  disableKycUserById(id: number) {
    return this.deleteRequest('kyc/api/disableKycUserById/' + id);
  }

  findAllKycBank() {
    return this.get('kyc/api/findAllKycBank');
  }

  findAllKycBankBranch() {
    return this.get('kyc/api/findAllKycBankBranch');
  }

  findAllKycUser() {
    return this.get('kyc/api/findAllKycUser');
  }

  findAllKycUserAccount() {
    return this.get('kyc/api/findAllKycUserAccount');
  }

  findKycBankBranchById(id: number) {
    return this.get('kyc/api/findKycBankBranchById/' + id);
  }

  findKycBankById(id: number) {
    return this.get('kyc/api/findKycBankById/' + id);
  }

  findKycUserAccountById(id: number) {
    return this.get('kyc/api/findKycUserAccountById/' + id);
  }

  findKycUserById(id: number) {
    return this.get('kyc/api/findKycUserById/' + id);
  }

  getBankBranchesByBankId(id: number) {
    return this.get('kyc/api/getBankBranchesByBankId/' + id);
  }


}
