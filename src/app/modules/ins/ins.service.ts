import {Injectable, Injector} from '@angular/core';
import {BaseService} from "../base/base.service";

@Injectable({providedIn: 'root'})
export class InsService extends BaseService {

  constructor(injector: Injector) {
    super(injector);
  }

  saveInsHospital(form: any) {
    return this.post('ins/api/saveInsHospital', form);
  }

  saveInsuranceClaim(form: any) {
    return this.post('ins/api/saveInsuranceClaim', form);
  }

  saveInsuranceCompany(form: any) {
    return this.post('ins/api/saveInsuranceCompany', form);
  }

  saveInsuranceCompanyBranch(form: any) {
    return this.post('ins/api/saveInsuranceCompanyBranch', form);
  }

  saveInsuranceCustomer(form: any) {
    return this.post('ins/api/saveInsuranceCustomer', form);
  }

  saveInsuranceHospitalBranch(form: any) {
    return this.post('ins/api/saveInsuranceHospitalBranch', form);
  }

  saveInsurancePolicy(form: any) {
    return this.post('ins/api/saveInsurancePolicy', form);
  }

  saveInsuranceUserPolicy(form: any) {
    return this.post('ins/api/saveInsuranceUserPolicy', form);
  }

  findAllInsHospital() {
    return this.get('ins/api/findAllInsHospital');
  }

  findAllInsuranceClaim() {
    return this.get('ins/api/findAllInsuranceClaim');
  }

  findAllInsuranceCompany() {
    return this.get('ins/api/findAllInsuranceCompany');
  }

  findAllInsuranceCompanyBranch() {
    return this.get('ins/api/findAllInsuranceCompanyBranch');
  }

  findAllInsuranceCustomer() {
    return this.get('ins/api/findAllInsuranceCustomer');
  }

  findAllInsuranceHospitalBranch() {
    return this.get('ins/api/findAllInsuranceHospitalBranch');
  }

  findAllInsurancePolicy() {
    return this.get('ins/api/findAllInsurancePolicy');
  }

  findAllInsuranceUserPolicy() {
    return this.get('ins/api/findAllInsuranceUserPolicy');
  }

  findInsHospitalById(id: number) {
    return this.get('ins/api/findInsHospitalById/' + id);
  }

  findInsuranceClaimById(id: number) {
    return this.get('ins/api/findInsuranceClaimById/' + id);
  }

  findInsuranceCompanyBranchById(id: number) {
    return this.get('ins/api/findInsuranceCompanyBranchById/' + id);
  }

  findInsuranceCompanyById(id: number) {
    return this.get('ins/api/findInsuranceCompanyById/' + id);
  }

  findInsuranceCustomerById(id: number) {
    return this.get('ins/api/findInsuranceCustomerById/' + id);
  }

  findInsuranceHospitalBranchById(id: number) {
    return this.get('ins/api/findInsuranceHospitalBranchById/' + id);
  }

  findInsurancePolicyById(id: number) {
    return this.get('ins/api/findInsurancePolicyById/' + id);
  }

  findInsuranceUserPolicyById(id: number) {
    return this.get('ins/api/findInsuranceUserPolicyById/' + id);
  }

  disableInsHospitalById(id: number) {
    return this.get('ins/api/disableInsHospitalById/' + id);
  }

  disableInsuranceClaimById(id: number) {
    return this.get('ins/api/disableInsuranceClaimById/' + id);
  }

  disableInsuranceCompanyBranchById(id: number) {
    return this.get('ins/api/disableInsuranceCompanyBranchById/' + id);
  }

  disableInsuranceCompanyById(id: number) {
    return this.get('ins/api/disableInsuranceCompanyById/' + id);
  }

  disableInsuranceCustomerById(id: number) {
    return this.get('ins/api/disableInsuranceCustomerById/' + id);
  }

  disableInsuranceHospitalBranchById(id: number) {
    return this.get('ins/api/disableInsuranceHospitalBranchById/' + id);
  }

  disableInsurancePolicyById(id: number) {
    return this.get('ins/api/disableInsurancePolicyById/' + id);
  }

  disableInsuranceUserPolicyById(id: number) {
    return this.get('ins/api/disableInsuranceUserPolicyById/' + id);
  }

  getBranchesByCompanyId(id: number) {
    return this.get('ins/api/getBranchesByCompanyId/' + id);
  }

}
