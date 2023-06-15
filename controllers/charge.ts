import axios from "axios";
import { Request, Response } from "express";

interface ChargeParams {
  name: string;
  description: string;
  amount: number;
  currency: string;
  customer_name: string;
  customer_id: string;
}

const getCharge = async (req: Request, res: Response) => {
  const {
    name,
    description,
    amount,
    currency,
    customer_name,
    customer_id,
  }: ChargeParams = req.body;

  let data = JSON.stringify({
    name: name,
    description: description,
    local_price: {
      amount: amount,
      currency: currency,
    },
    pricing_type: "fixed_price",
    metadata: {
      customer_id: customer_id,
      customer_name: customer_name,
    },
    redirect_url: "https://charge/completed/page",
    cancel_url: "https://charge/canceled/page",
  });

  let config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: "https://api.commerce.coinbase.com/charges",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-CC-Api-Key": "8cfdab40-ef48-4634-acb6-b5eb9215404e",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
};

export { getCharge };
