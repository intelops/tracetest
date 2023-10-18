package middleware

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/google/uuid"
)

type key string

var (
	TenantIDKey key = "tenantID"
)

const HeaderTenantID = "X-Tracetest-TenantID"

func TenantMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		tenantID := getTenantIDFromRequest(r)
		log.Println("TenantID", tenantID)
		log.Println("Path ", r.URL.Path)
		// if tenant id exists and is invalid we return a 400 error
		if r.URL.Path == "/" {
			w.WriteHeader(http.StatusOK)
			w.Write([]byte("OK"))
			return
		}
		if tenantID != "" && !isValidUUID(tenantID) {
			log.Println("invalid tenant ID....... ", tenantID)
			err := fmt.Errorf("invalid tenant id: %s", tenantID)
			w.WriteHeader(http.StatusBadRequest)
			w.Write([]byte(err.Error()))
			return
		}
		log.Println("bypass ------------- ", r.URL.Path)
		ctx = context.WithValue(ctx, TenantIDKey, tenantID)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

func getTenantIDFromRequest(r *http.Request) string {
	return r.Header.Get(HeaderTenantID)
}

func isValidUUID(value string) bool {
	_, err := uuid.Parse(value)
	return err == nil
}

func TenantIDFromContext(ctx context.Context) string {
	tenantID := ctx.Value(TenantIDKey)

	if tenantID == nil {
		return ""
	}

	return tenantID.(string)
}
