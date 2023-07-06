<template>
  <Experiment title="mental-rotation">
    <InstructionScreen :title="'Welcome'">
      This is a sample introduction screen. 
    </InstructionScreen>

    <template v-for="(trials, i) in mr_training_trials">
      <KeypressScreen
          question="Are they the same?"
          :fixationTime= "_.sample([500, 1000, 2000])"
          pauseTime=500
          :keys="{'f': 'same', 'j': 'different'}"
          :responseTime="7000"
          :responseTimeLimit="7500"
      >

        <template #stimulus>
          <img :src="trials.picture" /> 
          <Record :data="{
            picture_name: trials.item,
            expected: trials.expected,
            trial_number: i+1,
            trial_type: 'training'
          }" />
        </template>
        <template #feedback>
          You are correct.
        </template>
    
      </KeypressScreen>
    </template>

    <InstructionScreen :title="''">
      The main trials will start. 
    </InstructionScreen>

    <template v-for="(trials, i) in mr_main_trials">
      <KeypressScreen
          question="Are they the same?"
          :fixationTime= "_.sample([500, 2000, 1000])"
          pauseTime=500
          :keys="{'f': 'same', 'j': 'different'}"
          :responseTimeLimit="7500"
      >

        <template #stimulus>
          <img :src="trials.picture" /> 
          <Record :data="{
            picture_name: trials.item,
            expected: trials.expected,
            trial_number: i+1,
            trial_type: 'main'
          }" />
        </template>
        <template #feedback>
          You are correct.
        </template>
    
      </KeypressScreen>
    </template>
    <!-- <DebugResultsScreen /> -->

    <SubmitResultsScreen />
  </Experiment>
</template>

<script>
import mr_training_trials from '../trials/mr_training_trials.csv';
import mr_main_trials from '../trials/mr_main_trials.csv';
import _ from 'lodash';

export default {
  name: 'App',
  data() {
    return {
      mr_training_trials: _.shuffle(mr_training_trials),
      mr_main_trials: _.shuffle(mr_main_trials),
    };
  },
  computed: {
    // Expose lodash to template code
    _() {
      return _;
    }
  }
};
</script>


