import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';
import client from './utils/axios';

jest.mock('./utils/axios', () => ({
  get: jest.fn().mockResolvedValue({ data: [] }),
  post: jest.fn().mockResolvedValue({ data: [] }),
}));

test('renders commit history without bootstrapping another React root', async () => {
  (client.get as jest.Mock).mockResolvedValue({ data: [] });
  await act(async () => { render(<App />); });
  expect(screen.getByRole('heading', { name: /github commit history/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Search by commit message')).toBeInTheDocument();
  expect(client.get).toHaveBeenCalledWith('/commit');
  expect(screen.queryByRole('alert')).not.toBeInTheDocument();
});
