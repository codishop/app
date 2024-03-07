import json
import subprocess


def run_command(command):
    print(f"Executando comando: {command}")
    process = subprocess.Popen(
        command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
    output, error = process.communicate()
    if output:
        print(f"Saída do comando:\n{output.decode('utf-8')}")
    if error:
        print(f"Erro do comando:\n{error.decode('utf-8')}")
    return output


def get_package_info():
    with open("package.json", "r") as file:
        data = json.load(file)
        name = data.get("name", "")
        version = data.get("version", "")
        return name, version


def container_exists(image):
    output = run_command("docker ps -a --format '{{.Image}}'")

    if output:
        return image in output.decode('utf-8')

    return False

def deploy():
    name, version = get_package_info()

    run_command("git remote set-url origin https://github.com/codishop/app.git")
    run_command("git pull")

    # run_command("docker login")

    # run_command(f"docker build -t {name}-web:{version} .")

    # if container_exists(f"{name}-web:{version}"):
    #     run_command(f"docker stop {name}-web:{version}")
    #     run_command(f"docker rm {name}-web:{version}")

    # run_command(f"docker run -p 3000:3000 {name}-web:{version}")


if __name__ == "__main__":
    deploy()
