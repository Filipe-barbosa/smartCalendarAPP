import DateInput from '../../../../components/DateInput';
import { TextInput } from '../../../../components/Inputs';
import Button from '../../../../components/Buttons';
import { useForm } from 'react-hook-form';
import { useLocalStorage } from '../../../../hooks/useLocalStorage';


type ModalFormProps = {
  onClose: () => void,
}

export const ModalForm: React.FC<ModalFormProps> = ({onClose}) => {
  const { register, handleSubmit, setValue } = useForm();
  const [formValues, setFormValues] = useLocalStorage('formValues', []);

  const onSubmit = (data: any) => {
    const formData = {
      nome: data.nome,
      phone: data.phone,

    };

    const updatedFormValues = [...formValues, formData];
    setFormValues(updatedFormValues);

    setValue('nome', '');
    setValue('phone', '');

    onClose();

  };
  return (
    <div className="container mx-auto px-16">
      <div className=" flex flex-col justify-center items-start	p-0 gap-2 isolate">
        <h1 className="text-[28px]  leading-[34px] font-medium pt-8">
          Novo agendamento
        </h1>
        <p className="text-[#00000099] text-[16px] leading-[19px]">
          Realize o agendamento de um novo exame
        </p>
      </div>
      <div>
        <h3 className="text-[16px] text-[#000000D9] font-bold leading-[19px] pt-4 pb-4">
          Dados do paciente
        </h3>
        <div className=" flex flex-col items-start p-0 gap-4">
          <div className="flex flex-row items-start p-0 gap-4">
            <TextInput
              title={'Nome'}
              placeholder={'Informe o nome do paciente'}
              {...register('nome')}
            />
            <TextInput
              title={'Sobrenome'}
              placeholder={'Informe o sobrenome do paciente'}
            />
          </div>
          <div className="flex flex-row items-start p-0 gap-4">
            <TextInput
              title={'Telefone'}
              placeholder={'Informe o telefone'}
              {...register('phone')}
            />
            <TextInput
              title={'CPF'}
              placeholder={'000.000.000-00'}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[16px] text-[#000000D9] font-bold leading-[19px] pt-8  pb-4 ">
          Dados do exame
        </h3>
        <div className=" flex flex-col items-start p-0 gap-4">
          <div className="flex flex-row items-start p-0 gap-4 justify-center">
            <div>
              <p className="font-ligth">Data do exame</p>
              <DateInput />

            </div>

            <TextInput
              title={'Hora'}
              placeholder={'Informe a hora'}
            />

          </div>
          <div className="flex flex-row items-start p-0 gap-4">
            <div>
              <p className="font-ligth">Retorno</p>
              <DateInput />
            </div>
            <TextInput
              title={'Hora'}
              placeholder={'Informe a hora'}
            />
          </div>
          <div className="flex flex-row items-start p-0 gap-4">
            <TextInput
              title={'Responsável pelo agendamento'}
              placeholder={'Informe o respondavel pelo agendamento'}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-end'>
        <Button click={handleSubmit(onSubmit)} title='Agendar'/>
      </div>
    </div>
  );
};
