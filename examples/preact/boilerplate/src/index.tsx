import { getContentOptions, scale } from '@fanconnecttv/template-sdk';
import { render } from 'preact';
import { useEffect } from 'preact/hooks';
import { type Config } from './config.json';

interface BoilerplateProps {
  message: string;
}

const Boilerplate = ({ message }: BoilerplateProps) => {
  useEffect(FC.initialized, []);
  return <div>{message}</div>;
};

FC.addEventListener('initialize', async ({ contentOptions }) => {
  scale(document.body, 1920, 1080);

  const options = getContentOptions<Config>(contentOptions);

  const { message } = options;

  if (message == null) return FC.skip(`null message`);

  render(<Boilerplate message={message.value} />, document.body);
});
