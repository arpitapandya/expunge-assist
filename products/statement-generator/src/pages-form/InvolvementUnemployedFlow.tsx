import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

function InvolvementUnemployedFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { unemploymentDescription } = formState.unemployedState;

  const unemploymentDescriptionValid = unemploymentDescription !== '';
  const isNextDisabled = !unemploymentDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      unemployedState: { ...formState.unemployedState, ...changes },
    });
  };

  return (
    <ContentContainer>
      <FormContainer>
        <Textarea
          id="unemploymentDescription"
          label={t('unemployed_form.unemploymentDescription_input_label')}
          placeholder={t(
            'unemployed_form.unemploymentDescription_input_placeholder'
          )}
          defaultValue={unemploymentDescription}
          handleChange={onInputChange}
          rows={3}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementUnemployedFlow;
