import {useState, useEffect} from 'react';
import axios from 'axios';

const APIMUN = process.env.APIMUN;

const getMun = () => {
	const [mun, setMun] = useState([]);

	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: APIMUN,
        });
        setMun(response.data.data);
    console.log(mun)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setMun]);

	return {
		mun
	}
};

export default getMun;
