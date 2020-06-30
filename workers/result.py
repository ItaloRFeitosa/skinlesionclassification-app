from pprint import pprint
def calculate_chance_of_cancer(svm_model_result, binary_result):
    has_chance_of_cancer = (svm_model_result[0]>10) or (svm_model_result[1]>10) or (svm_model_result[4]>10)
    if (has_chance_of_cancer):
        binary_result['Câncer em Potencial'] += 1
    else:
        binary_result['Não Cancerígeno'] += 1
    return binary_result

def calculate_mean_probability(svm_model_result, mean_probability):
    for index, probability in enumerate(svm_model_result):
        mean_probability[index] += probability

    return mean_probability

def calculate_other_results(results):
    mean_probability = [0, 0, 0, 0, 0, 0, 0]
    binary_result = {
        'Não Cancerígeno': 0,
       'Câncer em Potencial': 0
    } 
    
    for cnn_key in results:
        for svm_key in results[cnn_key]:
            svm_model_result = results[cnn_key][svm_key]
            mean_probability = calculate_mean_probability(svm_model_result, mean_probability)
            binary_result = calculate_chance_of_cancer(svm_model_result, binary_result)

    mean_probability = [ mean/16 for mean in mean_probability ]
    binary_result['Não Cancerígeno'] *= 100/16 
    binary_result['Câncer em Potencial'] *= 100/16 
    return mean_probability, binary_result        

    

def process_result(results):
    processed_result = init_labels()
    
    processed_result['individual_results'] = results

    mean_probability, binary_result = calculate_other_results(results)

    processed_result['mean_probability'] = mean_probability
    processed_result['binary_result'] = binary_result

    return processed_result

def init_labels():
    return { 
        'labels' : ['akiec','bcc','bkl','df','mel','nv','vasc'],
        'labels_description' : ['Ceratose actínica',
                        'Carcinoma basocelular',
                        'Verruga seborreica',
                        'Dermatofibroma',
                        'Melanoma',
                        'Nevo melanocítico',
                        'Vascular'
                        ],
    }