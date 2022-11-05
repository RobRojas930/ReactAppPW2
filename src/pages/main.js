import React, { useState } from 'react';
import { View } from './../components/page/view/view';
import { ListOfCategories } from './../components/listOfCategories/index';
import { Tabmenu } from './../components/page/tabmenu/tabmenu';
import { ListOfProducts } from './../components/listOfProducts/products';
import { Container, Row } from 'reactstrap';
import { MAIN_PAGE } from '../utils/colors';

export const Main = (props) => {
  const [alertData, setAlertData] = useState(0);
  const onConfirm = ()=>
  {
    console.log('Estoy confirmando');
  }
  return (
    <View theme={MAIN_PAGE} banner={'announcement'} alertData={alertData}>
      <Tabmenu
        tabs={['Electronica', 'Frutas y verduras', 'Farmacia']}
        content={[
          <Container>
            <Row>
              <ListOfCategories alertMessage={(data) => setAlertData({...data, onConfirm})} />
            </Row>
              <ListOfProducts alertMessage={(data) => setAlertData({...data, onConfirm})} />
            <Row>
            </Row>
            <br />
            <br />
            <br />
            <br />
          </Container>,
        ]}
      ></Tabmenu>
    </View>
  );
};
