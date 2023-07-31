import { render } from 'preact';

/*import { getContentOptions } from '~lib';
import { type Config } from './config.json';
import { scale } from '';*/

interface BoilerplateProps {
  message: string;
}

const Boilerplate = ({ message }: BoilerplateProps) => {
  return <div>{message}</div>;
};

FC.addEventListener('initialize', async ({ contentOptions, device }) => {
  scale(document.body, 1920, 1080);

  const options = getContentOptions<Config>(contentOptions);

  const { message } = options;

  if (message == null) return FC.skip(`null message`);

  render(<Boilerplate message={message} />, document.body);
});
