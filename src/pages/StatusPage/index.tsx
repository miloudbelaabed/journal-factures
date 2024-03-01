import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

type SucessPageProps = {
  type: 'success';
  message: string;
  subMessage?: string;
  primaryButtonClick?: () => void;
  primaryButtonLabel?: string;
  secondaryButtonClick?: () => void;
  secondaryButtonLabel?: string;
  statusCode: '200' | '201';
};

type ErrorPageProps = {
  type: 'error';
  message: string;
  subMessage?: string;
  primaryButtonClick?: () => void;
  primaryButtonLabel?: string;
  secondaryButtonClick?: () => void;
  secondaryButtonLabel?: string;
  errosTitle?: string;
  errors?: string[];
  statusCode: '500' | '404' | '403';
};

type ErrorCodePageProps = {
  type: 'errorCode';
  statusCode: '403' | '404' | '500';
};

type StatusPageProps = SucessPageProps | ErrorCodePageProps | ErrorPageProps;

function StatusPage(props: StatusPageProps) {
  const { type, statusCode } = props;
  const navigate = useNavigate();

  if (type === 'errorCode') {
    return (
      <Result
        status={statusCode}
        title={statusCode}
        subTitle="Désolé, la page que vous avez visité n'existe pas."
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            Retour à l'accueil
          </Button>
        }
      />
    );
  }
  return <div>{type}</div>;
}

export default StatusPage;
