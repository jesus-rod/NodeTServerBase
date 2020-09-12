import { RequestHandler } from 'express';

import { MyModel } from '../models/modelTemplate'

const RECORDS: MyModel[] = [];

export const createSomething: RequestHandler = (req, res, next) => {
  const text = (req.body as {text: string}).text;
  const newModel = new MyModel(Math.random().toString(), text)

  RECORDS.push(newModel);

  res.status(201).json({message: 'Created the record', createdRecord: newModel})
};

export const getSomething: RequestHandler = (req, res, next) => {
  res.status(200).json({records: RECORDS});
}

export const updateSomething: RequestHandler<{ id: string }> = (req, res, next) => {
  const somethingId = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  const recordIndex = RECORDS.findIndex(record => record.id === somethingId);

  if (recordIndex < 0) {
    throw new Error('Could not find todo!');
  }

  RECORDS[recordIndex] = new MyModel(RECORDS[recordIndex].id, updatedText);

  res.json({ message: 'Updated!', updatedTodo: RECORDS[recordIndex] });
};

export const deleteSomething: RequestHandler = (req, res, next) => {
  const recordId = req.params.id;

  const recordIndex = RECORDS.findIndex(record => record.id === recordId);

  if (recordIndex < 0) {
    throw new Error('Could not find todo!');
  }

  RECORDS.splice(recordIndex, 1);

  res.json({ message: 'Record deleted!' });
};