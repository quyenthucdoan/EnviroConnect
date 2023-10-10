import { request } from "../configs/axios"

const getAllActivies = async () => {
	return request({ method: "GET", url: `/activities` })
}

export { getAllActivies }
