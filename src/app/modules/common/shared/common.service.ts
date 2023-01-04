import { Injectable, Injector } from '@angular/core';
import { BaseService } from "../../base/base.service";

@Injectable({
  providedIn: 'root'
})
export class CommonService extends BaseService {

  public addressTypes: any[] = [];
  public cities: any[] = [];
  public countryCities: any[] = [];
  public contactTypes: any[] = [];
  public countries: any[] = [];
  public accountTypes: any[] = [];
  public claimTypes: any[] = [];
  public userTypes: any[] = [];
  public userArtifacts: any[] = [];
  public skills: any[] = [];
  public taskComplexities: any[] = [];


  constructor(injector: Injector) {
    super(injector);
  }

  getAddressTypes() {
    this.get('common/api/getAddressTypes').subscribe((resp: any) => {
      this.addressTypes = resp;
    });
  }

  getBankAccountTypes() {
    this.get('profile/auth/getUserName').subscribe((resp: any) => {
      this.accountTypes = resp;
    });
  }

  getHospitalInsuranceClaimTypes() {
    this.get('profile/getUserTypes').subscribe((resp: any) => {
      this.claimTypes = resp;
    });
  }

  getUserTypes() {
    this.get('profile/getUserTypes').subscribe((resp: any) => {
      this.userTypes = resp;
    });
  }
  getTaskComplexities() {
    this.get('task/taskComplexities').subscribe((resp: any) => {
      this.taskComplexities = resp;
    });
  }

  getAllSkills() {
    this.get('cmn/getSkills').subscribe((resp: any) => {
      this.skills = resp;
    });
  }

  getAllProposalStatusCAtalog() {
    this.get('proposal/proposalStatusCatalogList').subscribe((resp: any) => {
      this.skills = resp;
    });
  }


  getUserArtifacts() {
    this.get('profile/getUserArtifacts').subscribe((resp: any) => {
      this.userArtifacts = resp;
    });
  }

  getCities() {
    this.get('common/api/getCities').subscribe((resp: any) => {
      this.cities = resp;
    });
  }

  getCitiesByCountry(id: number) {
    this.get('common/api/getCitiesByCountry/' + id).subscribe((resp: any) => {
      this.countryCities = resp;
    });
  }

  getContactTypes() {
    this.get('common/api/getContactTypes').subscribe((resp: any) => {
      this.contactTypes = resp;
    });
  }

  getCountries() {
    this.get('common/api/getCountries').subscribe((resp: any) => {
      this.countries = resp;
    });
  }

  findCountryById(id: number) {
    let nameOfCountry = this.countries?.find(c => c.value == id);
    return nameOfCountry;
  }

  findCityById(id: number) {
    return this.cities?.find(c => c.value == id);
  }

  findUserTypeById(id: number) {
    return this.userTypes?.find(c => c.id == id);
  }

  findAccountTypeById(id: number) {
    return this.accountTypes?.find(c => c.id == id);
  }


  findAllUserTypes() {
    return this.userTypes;
  }

  findAllUserTypeByUserID(id: number) {
    return this.userTypes?.find(c => c.id == id);
  }

}
