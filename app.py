import subprocess
import sys
import os

from flask import request, Flask, make_response, render_template

projectPath = os.path.dirname(os.path.abspath(__file__)) + '/dist/'
print(projectPath)

app = Flask(__name__, instance_path=projectPath, template_folder='dist/', static_folder='dist/', static_url_path='')

app.config['JSON_AS_ASCII'] = False

TIMEOUT = 1

@app.route("/")
def homePage():
    return render_template('index.html')

@app.route('/api/zpy', methods=['POST', 'OPTIONS'])
def zpy():
    if request.method == 'POST':
        code = request.json['code']
        # output = subprocess.check_output([sys.executable, '-c', code])
        try:
            result = subprocess.run([sys.executable, '-c', code],shell=False,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,encoding="utf-8",timeout=TIMEOUT)
            output = result.stdout
        except:
            output = f"[运行错误] 运行时间超出限制: {TIMEOUT}s"

        response = make_response(output)
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET,POST'
        response.headers['Access-Control-Allow-Headers'] = 'x-requested-with,content-type'
        return response
    else:
        # CORS跨域配置
        response = make_response()
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET,POST'
        response.headers['Access-Control-Allow-Headers'] = 'x-requested-with,content-type'
        return response


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

