import { useEffect, useState } from "react"

const useService = ({ service, deps = [] }) => {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await service()
				setData(res.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, deps)

	return { data }
}

export default useService
