/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';
/**
 * Client service.
 */
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  /**
   * @param {HttpClient} http Http Client to send requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * @returns {Observable<any>} Clients data
   */
  getClients(): Observable<any> {
    return this.http.get('/clients');
  }

  /**
   * @param clientId
   * @returns {Observable<any>} Client
   */
  getClientId(clientId: number): Observable<any> {
    return this.http.get(`/clients/${clientId}`);
  }

  /**
   * @param clientId
   * @returns {Observable<any>} Clients Accounts
   */
  getClientAccounts(clientId: number) {
    return this.http.get(`/clients/${clientId}` + '/accounts');
  }

  /**
   * @param clientId
   * @returns {Observable<any>} Clients Charges
   */
  getClientCharges(clientId: number) {
    return this.http.get(`/clients/${clientId}` + '/charges');
  }

  /**
   * @param clientId
   * @returns {Observable<any>} Clients Addresses
   */
  getClientAddress(clientId: number) {
    return this.http.get(`client/${clientId}` + '/addresses');
  }

  /**
   * @param clientId
   * @returns {Observable<any>} Clients Note
   */
  getClientNote(clientId: number) {
    return this.http.get(`clients/${clientId}` + '/notes');
  }

  /**
   * @param clientId
   * @param notes
   * @returns {Observable<any>}
   */
  postClientNote(clientId: number, notes: any): Observable<any> {
    return this.http.post(`/clients/${clientId}` + '/notes', notes);
  }

  /**
   * @returns {Observable<any>} Client Address template.
   */
  getClientAddressTemplate(): Observable<any> {
    return this.http.get('/clients/addresses/template');
  }

  /**
   * @param {number} clientId
   * @param {any} type
   * @param {any} body
   * @returns {Observable<any>}
   */
  postClientAddress(clientId: number, body: any, type: any): Observable<any> {
    const httpParams = new HttpParams()
      .set('type', type);
    return this.http.post(`/clients/${clientId}` + '/addresses', body, { params: httpParams });
  }

  /**
   * @param {number} clientId
   * @param {any} type
   * @param {any} body
   * @returns {Observable<any>}
   */
  putClientAddress(clientId: number, body: any, type: any): Observable<any> {
    const httpParams = new HttpParams()
      .set('type', type);
    return this.http.put(`/clients/${clientId}` + '/addresses', body, { params: httpParams });
  }

  /**
   * @param {number} clientId
   * @returns {Observable<any>} Client template
   */
  getClientIdentifierTemplate(clientId: number): Observable<any> {
    return this.http.get(`/clients/${clientId}` + '/identifiers/template');
  }

  /**
   * @param {number} clientId
   * @returns {Observable<any>} Client Identifiers
   */
  getClientIdentifiers(clientId: number): Observable<any> {
    return this.http.get(`/clients/${clientId}` + '/identifiers');
  }

  /**
   * @param {number} clientId
   * @param {any} body
   * @returns {Observable<any>}
   */
  postClientIdentifier(clientId: number, body: any): Observable<any> {
    return this.http.post(`/clients/${clientId}` + '/identifiers', body);
  }

  /**
   * @param {number} clientId
   * @param {number} identifierId
   * @returns {Observable<any>}
   */
  deleteClientIdentifier(clientId: number, identifierId: number) {
    return this.http.delete(`/clients/${clientId}` + `/identifiers/${identifierId}`);
  }

  /**
   * @param {number} clientId
   * @returns {Observable<any>}
   */
  postClientDocument(clientId: number, body: any): Observable<any> {
    return this.http.post(`/clients/${clientId}` + '/documents', body);
  }

  /**
   * @param clientId
   * @returns {Observable<any>} Clients Documents
   */
  getClientDocuments(clientId: number): Observable<any> {
    return this.http.get(`/clients/${clientId}` + 'documents');
  }

  /**
   * @param {number} clientId
   * @param {number} documentId
   * @returns {Observable<any>}
   */
  deleteClientDocuments(clientId: number, documentId: number): Observable<any> {
    return this.http.delete(`/clients/${clientId}` + `/documents/${documentId}`);
  }

  /**
   * @param {number} clientId
   * @param {number} documentId
   * @returns {Observable<any>} Client documents
   */
  downloadClientDocuments(clientId: number, documentId: number) {
    return this.http.get(`/clients/${clientId}` + `/documents/${documentId}`);
  }
}

