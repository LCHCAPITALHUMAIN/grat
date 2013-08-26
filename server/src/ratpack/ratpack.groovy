import static org.ratpackframework.groovy.RatpackScript.ratpack

def indexPages = ["index.html"] as String[]

ratpack {
    handlers {
        assets "public", indexPages
    }
}
