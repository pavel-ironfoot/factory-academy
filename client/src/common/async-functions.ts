import axios from "axios";

export const loginUser = async (password: string, area: string) => {
  try {
    const res = await axios.post('http://localhost:8800/users/login', {
      password,
      area,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return res.data;
  } catch (error: any) {
    console.error('Could not fetch:', error.message);
    return { error: 'Could not fetch' };
  }
}

export const editDetail = async (
  detailNumber: string,
  betweenHugs: string,
  betweenDetails: string,
  detailsAmount: string,
  blowValue: boolean,
  cleanHugsValue: boolean,
  corkValue: boolean) => {
  try {
    const res = await axios.patch('http://localhost:8800/users/one-detail-information/edit', {
      detailNumber,
      betweenHugs,
      betweenDetails,
      detailsAmount,
      blowValue,
      cleanHugsValue,
      corkValue
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  } catch (error: any) {
    console.error('Could not fetch:', error.message);
    return { error: 'Could not fetch' };
  }
}
