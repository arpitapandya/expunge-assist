import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

import Input from '../components/Input';

function InvolvementSomethingElseFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const {
    organizationName,
    serviceDescription,
  } = formState.communityServiceState;

  const organizationNameValid = organizationName !== '';
  const serviceDescriptionValid = serviceDescription !== '';
  const isNextDisabled = !organizationNameValid || !serviceDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      communityServiceState: { ...formState.communityServiceState, ...changes },
    });
  };

  return (
    <ContentContainer>
      <FormContainer>
        <Input
          id="organizationName"
          label={t('something_else_form.activityName_input_label')}
          placeholder={t('something_else_form.activityName_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={organizationName}
          type="text"
        />

        <Textarea
          id="serviceDescription"
          label={t('something_else_form.activityDescription_input_label')}
          placeholder={t(
            'something_else_form.activityDescription_input_placeholder'
          )}
          handleChange={onInputChange}
          defaultValue={serviceDescription}
          rows={3}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementSomethingElseFlow;