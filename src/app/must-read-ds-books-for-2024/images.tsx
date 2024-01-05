import Image from 'next/image'

import CausalInferenceInPythonImage from './Causal Inference in Python.jpg'
import ChangingWorldOrderImage from './Changing World Order.jpg'
import HandsOnMachineLearningWithScikitLearnImage from './Hands-On Machine Learning with Scikit-Learn.jpg'
import InterpretableMachineLearningImage from './Interpretable Machine Learning.jpg'
import LearningFromDataImage from './Learning From Data.jpg'
import MMLImage from './MML.jpg'
import PracticalGuideToAppliedConformalPredictionImage from './Practical Guide to Applied Conformal Prediction.jpg'
import PracticalStatisticsForDataScientistsImage from './Practical Statistics for Data Scientists.jpg'
import ProbabilisticMachineLearningImage from './Probabilistic Machine Learning.jpg'

export function CausalInferenceInPython() {
  return (
    <Image
      src={CausalInferenceInPythonImage}
      alt=""
      className="w-28"
      unoptimized
    />
  )
}

export function ChangingWorldOrder() {
  return (
    <Image src={ChangingWorldOrderImage} alt="" className="w-28" unoptimized />
  )
}

export function HandsOnMachineLearningWithScikitLearn() {
  return (
    <Image
      src={HandsOnMachineLearningWithScikitLearnImage}
      alt=""
      className="w-28"
      unoptimized
    />
  )
}

export function InterpretableMachineLearning() {
  return (
    <Image
      src={InterpretableMachineLearningImage}
      alt=""
      className="w-28"
      unoptimized
    />
  )
}

export function LearningFromData() {
  return (
    <Image src={LearningFromDataImage} alt="" className="w-28" unoptimized />
  )
}

export function MML() {
  return <Image src={MMLImage} alt="" className="w-28" unoptimized />
}

export function PracticalGuideToAppliedConformalPrediction() {
  return (
    <Image
      src={PracticalGuideToAppliedConformalPredictionImage}
      alt=""
      className="w-28"
      unoptimized
    />
  )
}

export function PracticalStatisticsForDataScientists() {
  return (
    <Image
      src={PracticalStatisticsForDataScientistsImage}
      alt=""
      className="w-28"
      unoptimized
    />
  )
}

export function ProbabilisticMachineLearning() {
  return (
    <Image
      src={ProbabilisticMachineLearningImage}
      alt=""
      className="w-28"
      unoptimized
    />
  )
}
