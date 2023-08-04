import { scale } from '@fanconnecttv/template-sdk';
import { render } from 'preact';
import { useEffect } from 'preact/hooks';

/*
import { getContentOptions } from '~lib';
import { type Config } from './config.json';
*/

interface BoilerplateProps {
  message: string;
}

const Boilerplate = ({ message }: BoilerplateProps) => {
  useEffect(FC.initialized, []);
  return <div>{message}</div>;
};

FC.addEventListener('initialize', async ({ /* contentOptions,*/ options }) => {
  scale(document.body, 1920, 1080);

  // TODO
  // const options = getContentOptions<Config>(contentOptions);

  // const { message } = options;

  const { message } = options;

  if (typeof message !== 'string') return FC.skip(`null message`);
  // if (message == null) return FC.skip(`null message`);

  render(<Boilerplate message={message} />, document.body);
});
