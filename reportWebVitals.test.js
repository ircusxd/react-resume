import reportWebVitals from './reportWebVitals';

test('calls reportWebVitals with a logging function', () => {
  const mockLog = jest.fn();
  reportWebVitals(mockLog);
  expect(mockLog).toHaveBeenCalled();
});