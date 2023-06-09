import DateInput from '../../../../components/DateInput';
import { TextInput } from '../../../../components/Inputs';
import Button from '../../../../components/Buttons';
import { Controller, useForm } from 'react-hook-form';
import { InputForm } from '../../../../types/InputForm';
import moment from 'moment';

type ModalFormProps = {
  handleFormSubmit: (data: InputForm) => void;
};

export const ModalForm: React.FC<ModalFormProps> = ({ handleFormSubmit }) => {
  const { register, handleSubmit, control } = useForm<InputForm>();

  const onSubmit = (data: InputForm) => {
    const formData: InputForm = {
      name: data.name,
      lastName: data.lastName,
      cpf: data.cpf,
      phone: data.phone,
      examDate: moment(data.examDate).format('DD/MM/YYYY'),
      examTime: data.examTime,
      returnDate: moment(data.returnDate).format('DD/MM/YYYY'),
      returnTime: data.returnTime,
      schedulingProfessional: data.schedulingProfessional,
    };

    handleFormSubmit(formData);
  };
  return (
    <form
      className="container mx-auto px-16"
      onSubmit={() => onSubmit}
    >
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
              {...register('name')}
            />
            <TextInput
              title={'Sobrenome'}
              placeholder={'Informe o sobrenome do paciente'}
              {...register('lastName')}
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
              {...register('cpf')}
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
              <Controller
                control={control}
                name="examDate"
                render={({ field: { onChange, onBlur, value } }) => (
                  <DateInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
            </div>

            <TextInput
              title={'Hora'}
              placeholder={'Informe a hora'}
              {...register('examTime')}
            />
          </div>
          <div className="flex flex-row items-start p-0 gap-4">
            <div>
              <p className="font-ligth">Retorno</p>
              <Controller
                control={control}
                name="returnDate"
                render={({ field: { onChange, onBlur, value } }) => (
                  <DateInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
            </div>
            <TextInput
              title={'Hora'}
              placeholder={'Informe a hora'}
              {...register('returnTime')}
            />
          </div>
          <div className="flex flex-row items-start p-0 gap-4">
            <TextInput
              title={'Responsável pelo agendamento'}
              placeholder={'Informe o respondavel pelo agendamento'}
              {...register('schedulingProfessional')}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          click={handleSubmit(onSubmit)}
          title="Agendar"
        />
      </div>
    </form>
  );
};
