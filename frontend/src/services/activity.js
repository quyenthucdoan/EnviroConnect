import { request } from "../configs/axios"

const getAllActivies = async () => {
	return request({ method: "GET", url: `/activities` })
}

const getActivityById = async(id) => {
	return request({ method: "GET", url: `/activities/${id}` })
}

export { getAllActivies, getActivityById }
