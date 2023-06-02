import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './PaymentForm.css';

const CryptoWallet = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [amount, setAmount] = useState('');

  const handleCryptoChange = (e) => {
    setSelectedCrypto(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        amount,
        crypto: selectedCrypto,
      };
    alert(`Amount: ${data.amount} Crypto: ${data.crypto}`)
    // handle payment submission here
  };

  return (
    <Form onSubmit={handleSubmit} className='payment-form'>
      <Row>
        <Col>
          <Form.Group controlId='cryptoSelect'>
            <Form.Label>Select a cryptocurrency:</Form.Label>
            <Form.Control as='select' value={selectedCrypto} onChange={handleCryptoChange} className='mb-3'>
              <option value=''>Select a cryptocurrency</option>
              <option value='BTC'>Bitcoin (BTC)</option>
              <option value='ETH'>Ethereum (ETH)</option>
              <option value='LTC'>Litecoin (LTC)</option>
              <option value='BCH'>Bitcoin Cash (BCH)</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId='amountInput'>
            <Form.Label>Enter the payment amount:</Form.Label>
            <div className='input-group mb-3'>
              <span className='input-group-text'>$</span>
              <Form.Control type='number' placeholder='Enter amount' value={amount} onChange={handleAmountChange} className='form-control' />
            </div>
          </Form.Group>
        </Col>
      </Row>

      <Button variant='primary' type='submit' disabled={!selectedCrypto || !amount} className='mt-3 payment-button'>
        Pay with {selectedCrypto}
      </Button>
    </Form>
  );
};

export default CryptoWallet;
