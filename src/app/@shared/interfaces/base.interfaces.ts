export interface IBaseFilterQuery {
  page?: number;
  take?: number;
  searchTerm?: string;
}
export interface IApiBaseResponse<T> {
  success: boolean;
  statusCode: number;
  total: number;
  page: number;
  payload: T;
}
export interface ICreatePanelPaymentAdvanced {
  amount: number;
  orderId: string;
  method: string;
  transactionId: string;
  sentFrom: string;
  customerId: string;
}
