import axios from "axios";
import { ENV } from "../../../env";
export class taskService {
  save(task: any) {
    return axios.post(`${ENV.URL}/task`, task).then((resp) => resp);
  }
  edit(data: any) {
    return axios.put(`${ENV.URL}/task/${data._id}`, data).then((resp) => resp);
  }
  remove(id: any) {
    return axios.delete(`${ENV.URL}/task/${id}`).then((resp) => resp);
  }
  list(id: any) {
    return axios.get(`${ENV.URL}/task/${id}`).then((resp) => resp);
  }
}
