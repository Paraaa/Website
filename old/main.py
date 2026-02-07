from flask import Flask, render_template


app = Flask(__name__)
# DEBUG: Enables reloading of template if it is changes.
app.config['TEMPLATES_AUTO_RELOAD'] = True


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run()
