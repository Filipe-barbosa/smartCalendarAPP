import DateInput from '../../../../components/DateInput';
import { TextInput } from '../../../../components/Inputs';
import Button from '../../../../components/Buttons';
import { Controller, useForm } from 'react-hook-form';
import { InputForm } from '../../../../types/InputForm';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

type ModalFormProps = {
  handleFormSubmit: (data: InputForm) => void;
};

export const ModalForm: React.FC<ModalFormProps> = ({ handleFormSubmit }) => {
  const { register, handleSubmit, control } = useForm<InputForm>();
  const { t } = useTranslation();

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
      className="container mx-auto px-8"
      onSubmit={() => onSubmit}
    >
      <div className=" flex flex-col justify-center items-start	gap-2 isolate">
        <h1 className="text-3xl leading-8 font-medium pt-8">
          {t('modalFormHome.title')}
        </h1>
        <p className="text-[#00000099] leading-5">
          {t('modalFormHome.subtitle')}
        </p>
      </div>
      <div>
        <h3 className="text-[16px] text-[#000000D9] font-bold leading-5 pt-4 pb-4">
          {t('modalFormHome.patientData')}
        </h3>
        <div className=" flex flex-col items-start p-0 gap-4">
          <div className="flex flex-row items-start p-0 gap-4">
            <TextInput
              title={'modalFormHome.inputName'}
              placeholder={'Informe o nome do paciente'}
              {...register('name')}
            />
            <TextInput
              title={'modalFormHome.inputLastName'}
              placeholder={'Informe o sobrenome do paciente'}
              {...register('lastName')}
            />
          </div>
          <div className="flex flex-row items-start p-0 gap-4">
            <TextInput
              title={'modalFormHome.inputPhone'}
              placeholder={'Informe o telefone'}
              {...register('phone')}
            />
            <TextInput
              title={'modalFormHome.inputCPF'}
              placeholder={'000.000.000-00'}
              {...register('cpf')}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[16px] text-[#000000D9] font-bold leading-5 pt-8  pb-4 ">
          Dados do exame
        </h3>
        <div className=" flex flex-col items-start p-0 gap-4">
          <div className="flex flex-row items-start p-0 gap-4 justify-center">
            <div>
              <p className="font-light">Data do exame</p>
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
              title={'modalFormHome.inputExamTime'}
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
              title={'modalFormHome.inputReturnTime'}
              placeholder={'Informe a hora'}
              {...register('returnTime')}
            />
          </div>
          <div className="flex flex-row items-start p-0 gap-4">
            <TextInput
              title={'modalFormHome.inputSchedulingProfessional'}
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
