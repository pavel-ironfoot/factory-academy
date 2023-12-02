import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCards } from '../../../store/cardSlice';
import { RootState } from '../../../store';
import { useTranslation } from 'react-i18next';
import vector from '../../../images/Vector.png';
import { Pagination } from '@mui/material';
import { OneDetail } from '../OneDetail';
import { PaintingAreaDetailType } from '../../../common/types-and-interfaces';
import { NavLink } from 'react-router-dom';

import './Main.scss';


export const Main = () => {
  const cards = useSelector((state: RootState) => state.allCards.cards);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allDetails, setAllDetails] = useState<PaintingAreaDetailType[]>([]);
  const pageSize = 5;

  const totalPages = useMemo(() => Math.ceil(cards.length / pageSize), [cards]);

  useEffect(() => {
    setCurrentPage(1);
  }, [cards.length]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8800/users/factory-all-details');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setAllDetails(jsonData);
        dispatch(updateCards(jsonData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleChangePage = (event: any, value: number) => {
    setCurrentPage(value);
  };

  const findDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    const result = cards.filter(elem => elem.number.toLowerCase().includes(searchValue));
    setAllDetails(result);
    setCurrentPage(1); 
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedDetails = allDetails.slice(startIndex, endIndex);

  const allDetailsToShow = displayedDetails.map(elem => (
    <NavLink key={elem.number+'11'} to={`/painting/${elem.number}`}>
        <OneDetail key={elem.number} elem={elem} />
    </NavLink>
  ));

  return (
    <main className='main-painting-area'>
      <div className='main-painting-area__search'>
        <img className="main-painting-area__search__img1" src={vector} alt="vector" />
        <input placeholder={t("search")} onChange={e => findDetail(e)} type="text" />
      </div>
      <div className='main-painting-area__show-details'>
        {allDetailsToShow}
      </div>
      <Pagination
        count={totalPages}
        variant='outlined'
        shape='rounded'
        onChange={handleChangePage}
        page={currentPage}
        size="large"
      />
    </main>
  );
};
